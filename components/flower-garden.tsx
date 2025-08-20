"use client"

import { useEffect } from "react"
import styles from "@/app/scss/main.module.scss"
import Link from "next/link"

export default function Home() {
    useEffect(() => {
        const c = setTimeout(() => {
            document.body.classList.remove("not-loaded")
            clearTimeout(c)
        }, 1000)
    })
    return (
        <>
            <div className={`${styles.night}`} />
            <div className={`${styles.flowers} mb-10 left-14`}>
                <div className={`${styles.flower} ${styles.flower__1}`}>
                    <div className={`${styles.flower__leafs} ${styles.flower__leafs__1}`}>
                        <div className={`${styles.flower__leaf} ${styles.flower__leaf__1}`} />
                        <div className={`${styles.flower__leaf} ${styles.flower__leaf__2}`} />
                        <div className={`${styles.flower__leaf} ${styles.flower__leaf__3}`} />
                        <div className={`${styles.flower__leaf} ${styles.flower__leaf__4}`} />
                        <div className={`${styles.flower__white_circle}`} />

                        <div className={`${styles.flower__light} ${styles.flower__light__1}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__2}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__3}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__4}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__5}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__6}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__7}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__8}`} />
                    </div>
                    <div className={`${styles.flower__line}`}>
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__1}`} />
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__2}`} />
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__3}`} />
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__4}`} />
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__5}`} />
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__6}`} />
                    </div>
                </div>

                <div className={`${styles.flower} ${styles.flower__2}`}>
                    <div className={`${styles.flower__leafs} ${styles.flower__leafs__2}`}>
                        <div className={`${styles.flower__leaf} ${styles.flower__leaf__1}`} />
                        <div className={`${styles.flower__leaf} ${styles.flower__leaf__2}`} />
                        <div className={`${styles.flower__leaf} ${styles.flower__leaf__3}`} />
                        <div className={`${styles.flower__leaf} ${styles.flower__leaf__4}`} />
                        <div className={`${styles.flower__white_circle}`} />

                        <div className={`${styles.flower__light} ${styles.flower__light__1}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__2}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__3}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__4}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__5}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__6}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__7}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__8}`} />
                    </div>
                    <div className={`${styles.flower__line}`}>
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__1}`} />
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__2}`} />
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__3}`} />
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__4}`} />
                    </div>
                </div>

                <div className={`${styles.flower} ${styles.flower__3}`}>
                    <div className={`${styles.flower__leafs} ${styles.flower__leafs__3}`}>
                        <div className={`${styles.flower__leaf} ${styles.flower__leaf__1}`} />
                        <div className={`${styles.flower__leaf} ${styles.flower__leaf__2}`} />
                        <div className={`${styles.flower__leaf} ${styles.flower__leaf__3}`} />
                        <div className={`${styles.flower__leaf} ${styles.flower__leaf__4}`} />
                        <div className={`${styles.flower__white_circle}`} />

                        <div className={`${styles.flower__light} ${styles.flower__light__1}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__2}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__3}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__4}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__5}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__6}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__7}`} />
                        <div className={`${styles.flower__light} ${styles.flower__light__8}`} />
                    </div>
                    <div className={`${styles.flower__line}`}>
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__1}`} />
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__2}`} />
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__3}`} />
                        <div className={`${styles.flower__line__leaf} ${styles.flower__line__leaf__4}`} />
                    </div>
                </div>

                <div className={`${styles.grow_ans} duration-1200`}>
                    <div className={`${styles.flower__g_long}`}>
                        <div className={`${styles.flower__g_long__top}`} />
                        <div className={`${styles.flower__g_long__bottom}`} />
                    </div>
                </div>

                <div className={`${styles.growing_grass}`}>
                    <div className={`${styles.flower__grass} ${styles.flower__grass__1}`}>
                        <div className={`${styles.flower__grass__top}`} />
                        <div className={`${styles.flower__grass__bottom}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__1}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__2}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__3}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__4}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__5}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__6}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__7}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__8}`} />
                        <div className={`${styles.flower__grass__overlay}`} />
                    </div>
                </div>

                <div className={`${styles.growing_grass}`}>
                    <div className={`${styles.flower__grass} ${styles.flower__grass__2}`}>
                        <div className={`${styles.flower__grass__top}`} />
                        <div className={`${styles.flower__grass__bottom}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__1}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__2}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__3}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__4}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__5}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__6}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__7}`} />
                        <div className={`${styles.flower__grass__leaf} ${styles.flower__grass__leaf__8}`} />
                        <div className={`${styles.flower__grass__overlay}`} />
                    </div>
                </div>

                <div className={`${styles.grow_ans} duration-2400`}>
                    <div className={`${styles.flower__g_right} ${styles.flower__g_right__1}`}>
                        <div className={`${styles.leaf}`} />
                    </div>
                </div>

                <div className={`${styles.grow_ans} duration-2800`}>
                    <div className={`${styles.flower__g_right} ${styles.flower__g_right__2}`}>
                        <div className={`${styles.leaf}`} />
                    </div>
                </div>

                <div className={`${styles.grow_ans} duration-2800`}>
                    <div className={`${styles.flower__g_front}`}>
                        <div className={`${styles.flower__g_front__leaf_wrapper} ${styles.flower__g_front__leaf_wrapper__1}`}>
                            <div className={`${styles.flower__g_front__leaf}`} />
                        </div>
                        <div className={`${styles.flower__g_front__leaf_wrapper} ${styles.flower__g_front__leaf_wrapper__2}`}>
                            <div className={`${styles.flower__g_front__leaf}`} />
                        </div>
                        <div className={`${styles.flower__g_front__leaf_wrapper} ${styles.flower__g_front__leaf_wrapper__3}`}>
                            <div className={`${styles.flower__g_front__leaf}`} />
                        </div>
                        <div className={`${styles.flower__g_front__leaf_wrapper} ${styles.flower__g_front__leaf_wrapper__4}`}>
                            <div className={`${styles.flower__g_front__leaf}`} />
                        </div>
                        <div className={`${styles.flower__g_front__leaf_wrapper} ${styles.flower__g_front__leaf_wrapper__5}`}>
                            <div className={`${styles.flower__g_front__leaf}`} />
                        </div>
                        <div className={`${styles.flower__g_front__leaf_wrapper} ${styles.flower__g_front__leaf_wrapper__6}`}>
                            <div className={`${styles.flower__g_front__leaf}`} />
                        </div>
                        <div className={`${styles.flower__g_front__leaf_wrapper} ${styles.flower__g_front__leaf_wrapper__7}`}>
                            <div className={`${styles.flower__g_front__leaf}`} />
                        </div>
                        <div className={`${styles.flower__g_front__leaf_wrapper} ${styles.flower__g_front__leaf_wrapper__8}`}>
                            <div className={`${styles.flower__g_front__leaf}`} />
                        </div>
                        <div className={`${styles.flower__g_front__line}`} />
                    </div>
                </div>

                <div className={`${styles.grow_ans} duration-3200`}>
                    <div className={`${styles.flower__g_fr}`}>
                        <div className={`${styles.leaf}`} />
                        <div className={`${styles.flower__g_fr__leaf} ${styles.flower__g_fr__leaf__1}`} />
                        <div className={`${styles.flower__g_fr__leaf} ${styles.flower__g_fr__leaf__2}`} />
                        <div className={`${styles.flower__g_fr__leaf} ${styles.flower__g_fr__leaf__3}`} />
                        <div className={`${styles.flower__g_fr__leaf} ${styles.flower__g_fr__leaf__4}`} />
                        <div className={`${styles.flower__g_fr__leaf} ${styles.flower__g_fr__leaf__5}`} />
                        <div className={`${styles.flower__g_fr__leaf} ${styles.flower__g_fr__leaf__6}`} />
                        <div className={`${styles.flower__g_fr__leaf} ${styles.flower__g_fr__leaf__7}`} />
                        <div className={`${styles.flower__g_fr__leaf} ${styles.flower__g_fr__leaf__8}`} />
                    </div>
                </div>

                <div className={`${styles.long_g} ${styles.long_g__0}`}>
                    <div className={`${styles.grow_ans} duration-3000`}>
                        {" "}
                        <div className={`${styles.leaf} ${styles.leaf__0}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-2200`}>
                        <div className={`${styles.leaf} ${styles.leaf__1}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-3400`}>
                        <div className={`${styles.leaf} ${styles.leaf__2}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-3600`}>
                        <div className={`${styles.leaf} ${styles.leaf__3}`} />
                    </div>
                </div>

                <div className="long-g long-g__1">
                    <div className={`${styles.grow_ans} duration-3600`}>
                        <div className={`${styles.leaf} ${styles.leaf__0}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-3800`}>
                        <div className={`${styles.leaf} ${styles.leaf__1}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-4000`}>
                        {" "}
                        <div className={`${styles.leaf} ${styles.leaf__2}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-4200`}>
                        <div className={`${styles.leaf} ${styles.leaf__3}`} />
                    </div>
                </div>

                <div className="long-g long-g__2">
                    <div className={`${styles.grow_ans} duration-4000`}>
                        {" "}
                        <div className={`${styles.leaf} ${styles.leaf__0}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-4200`}>
                        <div className={`${styles.leaf} ${styles.leaf__1}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-4400`}>
                        <div className={`${styles.leaf} ${styles.leaf__2}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-4600`}>
                        <div className={`${styles.leaf} ${styles.leaf__3}`} />
                    </div>
                </div>

                <div className="long-g long-g__3">
                    <div className={`${styles.grow_ans} duration-4000`}>
                        {" "}
                        <div className={`${styles.leaf} ${styles.leaf__0}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-4200`}>
                        <div className={`${styles.leaf} ${styles.leaf__1}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-3000`}>
                        {" "}
                        <div className={`${styles.leaf} ${styles.leaf__2}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-3600`}>
                        <div className={`${styles.leaf} ${styles.leaf__3}`} />
                    </div>
                </div>

                <div className="long-g long-g__4">
                    <div className={`${styles.grow_ans} duration-4000`}>
                        {" "}
                        <div className={`${styles.leaf} ${styles.leaf__0}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-4200`}>
                        <div className={`${styles.leaf} ${styles.leaf__1}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-3000`}>
                        {" "}
                        <div className={`${styles.leaf} ${styles.leaf__2}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-3600`}>
                        <div className={`${styles.leaf} ${styles.leaf__3}`} />
                    </div>
                </div>

                <div className="long-g long-g__5">
                    <div className={`${styles.grow_ans} duration-4000`}>
                        {" "}
                        <div className={`${styles.leaf} ${styles.leaf__0}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-4200`}>
                        <div className={`${styles.leaf} ${styles.leaf__1}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-3000`}>
                        {" "}
                        <div className={`${styles.leaf} ${styles.leaf__2}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-3600`}>
                        <div className={`${styles.leaf} ${styles.leaf__3}`} />
                    </div>
                </div>

                <div className="long-g long-g__6">
                    <div className={`${styles.grow_ans} duration-4200`}>
                        <div className={`${styles.leaf} ${styles.leaf__0}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-4400`}>
                        <div className={`${styles.leaf} ${styles.leaf__1}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-4600`}>
                        <div className={`${styles.leaf} ${styles.leaf__2}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-4800`}>
                        <div className={`${styles.leaf} ${styles.leaf__3}`} />
                    </div>
                </div>

                <div className="long-g long-g__7">
                    <div className={`${styles.grow_ans} duration-3000`}>
                        {" "}
                        <div className={`${styles.leaf} ${styles.leaf__0}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-3200`}>
                        <div className={`${styles.leaf} ${styles.leaf__1}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-3500`}>
                        <div className={`${styles.leaf} ${styles.leaf__2}`} />
                    </div>
                    <div className={`${styles.grow_ans} duration-3600`}>
                        <div className={`${styles.leaf} ${styles.leaf__3}`} />
                    </div>
                </div>
                <p className="text-white relative right-10 top-5">
                    © Made by{" "}
                    <Link href={"https://ayanda.vercel.app/"} className="underline">
                        Ayanda Kinyambo
                    </Link>
                </p>
            </div>
        </>
    )
}
