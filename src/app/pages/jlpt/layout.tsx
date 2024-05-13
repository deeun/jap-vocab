import styles from './layout.module.css'
import HomeButton from "@/app/components/HomeButton/homeButton";
export default function pageLayout({
                                       children, // will be a page or nested layout
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.jlpt__layout_wrap}>
            <HomeButton />
            {children}
        </div>
    )
}
