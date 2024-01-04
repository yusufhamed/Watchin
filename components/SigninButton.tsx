"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

const SigninButton = () => {
    const { data: session } = useSession();

    if(session && session.user){
        return(
            <div className="flex items-center gap-4 ml-auto">
                <p className="text-sky-600">Welcome, {session.user.name}!</p>
                <Button variant="secondary" onClick={() => signOut()}>Sign Out</Button>
            </div>
            
        );
  
    }
    return (
        <Button onClick={() => signIn()}>
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
    );
};

export default SigninButton;