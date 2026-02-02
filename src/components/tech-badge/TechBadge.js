import Image from "next/image";
import { useState } from "react";

export function TechBadge({ name, iconUrl }) {
    const [imgSrc, setImgSrc] = useState(
        iconUrl || `https://cdn.simpleicons.org/${name.toLowerCase().replace('.', 'dot').replace(' ', '')}`
    );

    // TODO: cambiar imagen cuando onError se ejecute, es decir cuando no se cargue correctamente la imagen que llega en la prop. Buscar un logo genérico o figura...

    return (
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1e1e22] border border-white/5 hover:border-white/20 transition-all group">
            <div className="w-8 h-8 flex items-center justify-center bg-black/20 rounded-md">
                <Image
                    src={imgSrc}
                    alt={name}
                    width={22}
                    height={22}
                    quality={100}
                    className="saturate-0 brightness-[0.60] group-hover:saturate-100 group-hover:brightness-100 transition-all"
                    onError={() => setImgSrc('https://www.svgrepo.com/svg/475686/stackoverflow-color')}
                />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{name}</span>
        </div>
    );
}