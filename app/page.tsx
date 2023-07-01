"use client";

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from "react-type-animation";
import Head from 'next/head';


const Home: React.FC = () => {
    const [text, setText] = useState('');

    return (
        <div className="bg-primary min-h-screen flex items-center justify-center">
            <Head>
                <title>Coming Soon | MTX DNS</title>
                <meta name="description" content="MTX DNS - Coming Soon" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
            </Head>

            <main className="flex flex-col items-center justify-center">
                <div className="flex items-center">
                    <h1 className="text-heading text-5xl mt-5 font-bold font-montserrat">
                        <TypeAnimation
                            sequence={[
                                "MTX",
                                2000,
                                "MaTriX",
                                2000,
                            ]}
                            wrapper="p"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h1>
                    <span className="text-heading text-5xl mt-5"> DNS</span>
                </div>
                <h3 className="text-heading text-3xl mt-5">Experience the DNS of Tomorrow</h3>
                <h2 className="text-third text-6xl font-bold mt-10">Coming Soon</h2>
            </main>
        </div>
    );
};

export default Home;
