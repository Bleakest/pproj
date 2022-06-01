import { Container } from 'react-bootstrap'
import '../styles/Tabs.css'
import {Routes, Route, Link} from 'react-router-dom'

import {VkPage} from './VkPage'
import {VkFriends} from './VkFriends'
import {VkNews} from './VkNews'
import {VkPhotos} from './VkPhotos'

export default function TabsVk() {
  return (
    <div>
        <Container className='d-flex'>
            <div className='tabsvk'>
                <Link to='/page' className='tabvk'>My page</Link>
                <Link to='/news' className='tabvk'>News</Link>
                <Link to='/friends' className='tabvk'>Friends</Link>
                <Link to='/photos' className='tabvk'>Photos</Link>
            </div>

            <Routes>
                <Route path='/page' element={<VkPage />} />
                <Route path='/news' element={<VkNews />} />
                <Route path='/friends' element={<VkFriends />} />
                <Route path='/photos' element={<VkPhotos />} />
            </Routes>
        </Container>
    </div>
  )
}
