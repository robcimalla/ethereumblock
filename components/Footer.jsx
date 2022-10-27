import React from 'react'
import Image from 'next/image'
import discordLogo from '../public/images/discordLogo.svg';

const Footer = () => {
    return (
        <div className="grid grid-cols-1 shadow-lg">
            <div className="grid grid-cols-3 bg-gray-800 text-white h-64 mt-8 items-center shadow-lg h-full rounded">
                <div className="mt-4 ml-4 border-l-4 border-white-800 p-2">
                    <p className="text-left">Disclaimer</p>
                    <ul className="text-xs">
                        <li className="mt-2">Die auf den Web-Seiten abrufbaren Beiträge dienen nur der allgemeinen Information und nicht der Beratung in konkreten Fällen.</li>
                    </ul>
                </div>
                <div className="mt-4 ml-4 border-l-4 border-white-800 p-2">
                    <p className="">Kontakt</p>
                    <p className="mt-2 text-xs">Falls du Fragen, Anregungen oder Feedback zum Blog hast, wende dich gerne an <a className="" href="mailto:geeksforgeeks@gmial.com">info@ethereumblog.de</a>.</p>
                </div>
                <div className="mt-4 ml-4 border-l-4 border-white-800 p-2">
                    <p className="">Weitere Informationen</p>
                    <div className="grid grid-cols-6 mt-2">
                        <img src="data:image/png;base64,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"></img>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAErElEQVRoge2YXWwUVRiGn+/sD6YsJiAqIBQ1EbVV/i6AmABt/I2iGCUNphUoBWMgwVophgtwIjFAgYIYNIZCUdJeNCKicuFPIr1BikE0ERKjiaFYFUUwsjR2y87nxW67s92ZZne7S4juczXnO+c7877nzJw5c6BAgQIFCvyfkWySrDYNhsKUAw+LMkOFu1RYUF8tR9LJ39KsZaIcAH5AOS7Cp4Ewn61aJT2ZasnIwNYmnSg+alWpAkYDZ1A+xPBReDjtVoVE0uln504dFglRpjBf4AngFuACsB+b7auXyZmcGmhs0lG2sAFhORAATqqy6fJZ3ht+O6PlCnMEpgMlCsXAOCAIjIx3cRGIAL8IdKpyCuFkENovdPLniIk8rcpaYBrQK/CWEV55sVr+GrKBbXu1SmE7sRG/KEptj5/DgSiVwLNx4SadgXDBBk4g7I8YWgM2D4ryBjBa4Q+E2vpqac3awJYmfUwMH8eLn6vypggLgfnAsCxFe9EDHFJoNcIKVR4CUJt59cvksFeSpwHLUn9oAqcQJgHfAeeBshyL9uILlBsQJgPfF4coraiQqFtDv1cPoWIqgUnx4j15EDkY5Y6hvbPzEguBFreGgz279TkWNRTWeFW4GtjSrGVAad7kZIowuaFZZ7tVuRoQ5bn8Ksocn/K8WzzlJbbe1qJQgN+B4XlXlQEC3bafm+oXyWVnPGUGRgR4nGtMPIBCkYny6MB4igGFBVdHUuaopmpLMtDWpj7g/qumKHMesCxN0pxU+PkS00jsX9LhS1uYFgxzndhMB47lKaePUUXFTHUGkj5kUSjPYHv6bThEmWMHetJq07mhS3wV/4LmKicJo5QDX/eXnZVimJuuehXWDdw+WxUSUWF9LnNSkGSNyS+xJk/PoPjocAsPg6M5zRmAwBRnud9AY5OOIvZjMST+EXz5zFEo3tii/e9pYgYM92ZyU9PLLLe4KDNzmeOGL5LYXPYbsNN8ifpQ4VWrTYPOmNWmQYENucxxw2cntCZWIeW2TDoBpoTCtDfs1ZXdwumQUEqYXTDoTGaTk4JKQqtzGR2XmX4AZhk4EVJA85qThMDYvmvjiI51bX0Noo7BNo6ol4HTQFeeNblxLn7vVNTNAIzx6KgE5RDKfrKe9IxQhXcRDgIlri3E5RES2OzZpbAC4QrKHIGDgOsP9hCJAu/bhtkCiscPTFzPpsSlg23NWqfK1oFxB6fFpgrDeYXFwJPEzoWyOqIkNtonDHxwJco7fuFG29AicLdne6WuvkZ2uBoAaGzWR2xlD96rkg3sMz7W1y2Wrh279eZeH7MMzFS4Q+HW+CpRBFwfz/kb6Fb4VeAngR9t6AhEOVa7XM5t3q3jfX42oCzC+6ChC6hZvVQ+cQZdR25ji4709/CawFK8D7AiwAFbaFhTLd94tBmUhmadamxeRniK2FGkGz0ITb1B1q2tlIsDKwed+s27dbzx8YLAM7jskwS6xTCjbomcysZA4z4tVZvjGputgXQhtBrD63WLxXMVTOvZtSw1oQncJ1CuwgygRGAMysqXamRfNuL72LZHlyDsUviN2LLZgXIkfJajliX2UPouUKBAgQL/ff4FA2+KbGRpDxIAAAAASUVORK5CYII="></img>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer