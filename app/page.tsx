"use client"

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LoaderOne } from "@/components/ui/loader"
import { Separator } from "@/components/ui/separator"
import { SparklesCore } from "@/components/ui/sparkles"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { motion } from "motion/react"
import { useState } from "react"

export default function HomePage() {
  const [joke, setJoke] = useState("");

  const getJoke = useQuery({
    queryKey: ["get-joke"],
    queryFn: async () => {
      const { data } = await axios.get("/api/generate-joke");
      setJoke(data.joke);
      return data;
    }
  });

  return (
    <BackgroundBeamsWithCollision>
      <div className="relative z-50 min-h-screen flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-2 drop-shadow-[0_0_18px_rgba(255,50,50,0.85)] mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              🌹 Happy Birthday 🌹
            </motion.h1>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-2 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Joke Generator
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mx-auto"
          >
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800">Joke</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-lg p-6 border border-blue-200/50 dark:border-blue-700/50">
                  <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed text-center font-medium">
                    {joke}
                  </p>
                </div>

                <Separator className="my-4" />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="w-fit mx-auto"
                >
                  <Button
                    variant={"default"}
                    onClick={() => getJoke.refetch()}
                    className="w-64 h-14 text-xl text-zinc-950 hover:text-zinc-100 rounded-4xl bg-white/50 hover:bg-blue-900/80">
                    {
                      getJoke.isFetching ? (
                        <div className="mb-3">
                          <LoaderOne />
                        </div>
                      ) : (
                        "Press when you feel sad"
                      )
                    }
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
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
    </BackgroundBeamsWithCollision >
  )
}
