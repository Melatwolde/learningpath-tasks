'use client';
import Image from "next/image";
import { signIn } from "next-auth/react";
import './globals.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Signup from "./auth/signup/signup";
import Member from "./members/page";
import Otp from "./auth/[...otp]/page";
import LoginPage from "./[...login]/page";

export default function Home() {
  return (
    <main>
      
      <Signup/>
      {/* <LoginPage/> */}
    </main>
  )
  
}