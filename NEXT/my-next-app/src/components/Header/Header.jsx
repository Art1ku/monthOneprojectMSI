import Link from "next/link"

const Header = () => {

    return(
        <>
            <div>
                <Link href={"/"}>main</Link>
                <Link href={"/store"}>store</Link>
            </div>
        </>
    )
}

export default Header