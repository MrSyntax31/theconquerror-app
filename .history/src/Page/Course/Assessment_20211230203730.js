import React, {useState, useEffect} from 'react'
import {} from '../../firebase/firebase'
import {getAuth} from 'firebase-auth'
import { onSnapshot,collection,getFirestore, doc,  query, orderBy, limit, addDoc, setDoc } from 'firebase/firestore';
import {} from 'firebase/database'


export default function Assessment() {

        const Auth = getAuth();
        
        const assessmentdb = getFirestore();

        const collectionRef = collection(assessmentdb, "topics");
 

        const 

        useEffect(
          () => {
            const q = query(collectionRef,orderBy("created_at","desc"), limit(5));
        
            onSnapshot(q, (snapshot) =>
              setDiscussion(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

            )
            


          },[]); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>

        

                
        </div>
    )
}
