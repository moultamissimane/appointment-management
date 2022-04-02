import React, {useEffect, useRef} from "react"
import lottie from "lottie-web"
import booking from "../../public/booking.json"

export const AppLottie = () => {
    const anime = useRef(null)

        useEffect(() => {
            lottie.loadAnimation({
              container: anime.current,
              renderer: "svg",
              loop: true,
              autoplay: true,
              animationData: booking,
            });
            return () => lottie.stop();
    }, []);
    return <div className="h-screen w-screen" ref={anime}></div>
}

