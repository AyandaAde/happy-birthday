"use client"

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { LoaderOne } from "@/components/ui/loader";
import { SparklesCore } from "@/components/ui/sparkles";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "motion/react";
import { useState } from "react";

// 🌹 Rose SVG Component

function RoseSVG({ size = 80 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" >
      {/* Stem */}
      <rect x="30" y="28" width="4" height="30" fill="#2f9e44" />
      {/* Leaf */}

      <path d="M34 42c10 2 12 8 4 10s-12-6-12-6z" fill="#37b24d" />
      {/* Rose petals */}
      <circle cx="32" cy="20" r="10" fill="#e03131" />
      <circle cx="26" cy="18" r="8" fill="#f03e3e" />
      <circle cx="38" cy="18" r="8" fill="#f03e3e" />
      <circle cx="32" cy="12" r="6" fill="#fa5252" />
    </svg>);
}

export default function HomePage() {
  const [joke, setJoke] = useState("");

  const getJokeMt = useMutation({
    mutationFn: async () => {
      const { data } = await axios.get("/api/generate-joke");

      return data;
    }
  });

  const getJoke = async () => {
    getJokeMt.mutate(undefined, {
      onSuccess: (data) => {
        setJoke(data.joke);
      },
      onError: (data) => {
        console.error("Error generating joke", data);
      }
    });
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="relative z-50 min-h-screen flex flex-col items-center justify-center w-screen h-screen overflow-y-scroll overflow-x-hidden">

        {/* Title */}
        <div className="relative w-full h-full flex flex-col items-center justify-center z-50">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-red-500 mb-12 drop-shadow-[0_0_18px_rgba(255,50,50,0.85)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            🌹 Happy Birthday 🌹
          </motion.h1>
          {
            joke !== "" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="text-zinc-50 text-2xl mb-5 bg-gray-500 p-3 rounded-3xl"
              >
                {joke}
              </motion.p>
            )
          }
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Button
              variant={"default"}
              onClick={getJoke}
              className="w-64 h-14 text-xl text-zinc-950 hover:text-zinc-100 rounded-4xl bg-white/50 hover:bg-blue-900/80">
              {
                getJokeMt.isPending ? (
                  <div className="mb-3">
                    <LoaderOne />
                  </div>
                ) : (
                  "Press when you feel sad"
                )
              }
            </Button>
          </motion.div>
          {/* Roses Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div key={i} initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: i * 0.2, type: "spring" }} >
                <RoseSVG size={120} />
              </motion.div>
            ))}
          </div>
          <div className="w-full absolute inset-0 h-screen -z-10">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={25}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}