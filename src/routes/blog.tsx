import { Outlet } from 'solid-start'
import styles from './blogPost.module.scss'

export default function BlogPost() {
  return (
    <div class={styles.blogPost}>
      <Outlet />
    </div>
  )
}
