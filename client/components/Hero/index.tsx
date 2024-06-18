import styles from "./page.module.css";
import Image from "next/image"
import Link from "next/link"
import Nav from "../Nav";

export default function Hero() {
    return (
        <div>
            <Nav curPage='Home'/>
            <div className={styles.container}>
                <div className={styles.title}>
                    title...
                    <div className={styles.links}>
                        <Link href="">&gt; boo1</Link>
                        <Link href="">&gt; boo2</Link>
                        <Link href="">&gt; boo3</Link>
                    </div>
                </div>
                <div>
                    <Image 
                    src="/emolga_and_pachurisu.jpg"
                    alt="emolga and pachurisu"
                    width={500}
                    height={400}
                    />
                </div>
            </div>
        </div>
    );
}