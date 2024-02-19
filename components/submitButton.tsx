'use client'
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react";

function SubmitButton({ movieData }:any) {
    console.log(JSON.stringify(movieData))
    const  handleSubmit = async () =>{
        const res = await fetch("/api/Movies", {
          method: "POST",
          body: JSON.stringify(movieData),
          headers: { // Changed this line
            "Content-Type": "application/json"
          }
        })
      };

    return (
      <Button onClick={handleSubmit}>Add to Watch List</Button>
    );
  }
  
  export default SubmitButton;
