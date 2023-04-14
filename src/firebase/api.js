import {
    getFirestore,
    collection,
    getDocs,
    query,
    doc,
    getDoc,
    addDoc,
    deleteDoc,
    updateDoc,
    setDoc,
    where,
    onSnapshot,
} from "firebase/firestore";


const getItems = async (collectionName, db) => {
	const colRef = collection(db, collectionName);
	const result = await getDocs(query(colRef));
	return getArrayFromCollection(result);
};
const getItemsByCondition = async (field, value, condition, collectionName, db) => {
	const colRef = collection(db, collectionName);
	const result = await getDocs(query(colRef, where(field, condition, value)));
	return getArrayFromCollection(result);
};


const createItem = async (obj, id, collectionName, db) => {
	await setDoc(doc(db, collectionName, id), obj);
	// no error detected !  CREATE AND EDIT, PISA
};

const addItem = async (obj, collectionName, db) => {
	try {
		const docRef = await addDoc(collection(db, collectionName), obj);
		return docRef.id;
	} catch (e) {
		return e;
	}
};


// DELETE
const deleteItem = async (id, collectionName, db) => {
	await deleteDoc(doc(db, collectionName, id));
};
// DELETE by CONDITION 
const deleteByCondition = async (field, value, condition, collectionName, db) => {
	const q = query(collection(db, collectionName), where(field, condition, value));
	const querySnapshot = await getDocs(q);
	let cont = 0;
	querySnapshot.forEach( async (doc) => {
		console.log(doc.id, " => ", doc.data());
		cont ++;
		await deleteItem( doc.id, collectionName, db );
	});
	return cont;
};



//#region ***** HELPERS *****
const getArrayFromCollection = (collection) => {
	return collection.docs.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});
};
//#endregion

export {
	getItems,
	getItemsByCondition,
	createItem,
	addItem,
	deleteItem,
	deleteByCondition
}


// ***** EXAMPLES *****
// ********************
//#region ***** EXAMPLES *****
	// // DELETE BY CONDITION 
	// const res = await deleteByCondition('id', "1", '==', 'prueba', db );
	// console.log( 'res:', res  );

	// // DELETE
	// await deleteItem( "03", "prueba", db );

	// // ADD ITEM
	// const obj =  {"id":"5", name: "dino" }
	// const res = await addItem(obj, "prueba", db );
	// console.log( 'res:', res   );

	// ADD o EDIT
	// const obj =  {"id":"1", name: "dino" }
	// const res = await createItem(obj, "04", "prueba", db );
	// console.log( 'res:', res   );


	// GET TODOS 
	// const items = await getItems('items', db );
	// const arr = [];
	// items.forEach(element => {
	// 	arr.push( element )
	// });
	// console.log( 'res:', arr   );


	// // GET BY CONDITION 
	// const items = await getItemsByCondition('price', 90, '<=', 'items', db );
	// const arr = [];
	// console.log( 'count:', items.length );
	// items.forEach(element => {
	// 	arr.push( element )
	// });
	// console.log( 'res:', arr   );

//#endregion



//#region ***** LINKS *****

// // https://softauthor.com/firebase-firestore-delete-document-deletedoc/
// import {getFirestore, doc, deleteDoc} from "firebase/firestore";
// const db = getFirestore();
// const docRef = doc(db, "cities", "yftq9RGp4jWNSyBZ1D6L");
// deleteDoc(docRef)
// .then(() => {
// 	console.log("Entire Document has been deleted successfully.")
// })
// .catch(error => {
// 	console.log(error);
// })

// https://softauthor.com/firebase-firestore-get-document-by-id/
// get doc

// https://react-query-firebase.invertase.dev/firestore/querying-collections
// see !!!

// https://modularfirebase.web.app/common-use-cases/firestore/
// important !!!

//#endregion

