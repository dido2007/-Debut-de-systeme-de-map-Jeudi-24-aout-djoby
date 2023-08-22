
"use client";

import Link from "next/link"
import { useState } from "react";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/AddAnnonce/Form";

const AddAnnonce = () => {
  const router = useRouter();
  // const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ 
    typeDeService: '',
    typeDeMetier: '',
    prix: "",
    description: "",
    disponibilites: [],
    ImageMetier: '/assets/images/metiers/technicien-electricien.png'
  });

  const createAnnonce = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/annonce/new", {
        method: "POST",
        body: JSON.stringify({
          typeDeService: post.typeDeService,
          typeDeMetier: post.typeDeMetier,
          description: post.description,
          disponibilites: post.disponibilites,
          prix: post.prix,
          // userId: session?.user.id,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            <Form
              type='Create'
              post={post}
              setPost={setPost}
              submitting={submitting}
              handleSubmit={createAnnonce}
            />
        </h1>
    </section>
  )
}

export default AddAnnonce