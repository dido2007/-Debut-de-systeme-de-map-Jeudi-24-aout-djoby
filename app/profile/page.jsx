'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Demande from '../../components/AnnoncePage/Demande'



const MyDemande = () => {

    const handleEdit = async () => {

    }

    const handleDelete = async () => {
        
    }



  return (
    <Demande 
    name='Demande |'
    desc='Welcome to your personalized Demande Page'
    commentaires={[]}
    handleEdit={handleEdit}
    handleDelete={handleDelete}



    />
  )
}

export default MyDemande;