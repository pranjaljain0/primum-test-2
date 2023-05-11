import { useEffect, useState } from "react";

export default function Slide5() {
    const [showThanks, setShowThanks] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowThanks(true);
        }, 4000);
    }, []);

    return (<div className="grid grid-cols-1 gap-6 ">
        <div className="flex items-center justify-center h-[33rem] relative">
            <div className="flex flex-col items-center max-w-lg space-y-6 text-center">

            </div>
        </div>
    </div>)
}