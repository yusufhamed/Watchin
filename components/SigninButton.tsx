'use client'
import React, {useEffect} from "react";
import { authConfig } from "@/lib/authConfig";
import { signIn, signOut, useSession, UseSessionOptions } from "next-auth/react";
import { Button } from "@/components/ui/button"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

const SigninButton = () => {
    
    const session :any =  useSession();
    useEffect(() => {
        console.log(session); // Log session data when it changes
    }, [session]);

    if(session && session.data){
        const name = session.data.user.sub;
        const capitalizedUserName = name.charAt(0).toUpperCase() + name.slice(1);
        return(
            <div className="flex items-center gap-4 ml-auto">
                <p className="text-sky-600">Welcome, {capitalizedUserName}!</p>
                <Button variant="secondary" onClick={() => signOut()}>Sign Out</Button>
            </div>
            
        );
  
    }
    return (
        <Button onClick={() => signIn("trakt")}>
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
    );
};

export default SigninButton;