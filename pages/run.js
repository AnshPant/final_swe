import React from 'react'
import Link from 'next/link'
import Header from './header'

function run() {
  return (
    <section className='combine'>
      <Header />
      <div class="space"></div>
        
        <div class='e'>
        {/*  */}
        <div class="ll max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6ak3rXlD8EKpmb7Ad2BnAI-hYB5ETdjO2Q&usqp=CAU" alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    
    <Link href="login">

                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Student
                   </button>
                </Link>
  </div>
</div>
{/*  */}
{/*  */}
<div class="ll max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfV72jN_mCWtvAqBcmTtmXbVu00GVbAyLFYA&usqp=CAU" alt="Sunset in the mountains"  />
  <div class="px-6 py-4">
    
  <Link href="login">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Warden
                   </button>
                    </Link>
  </div>
</div>
{/*  */}
{/*  */}
<div class="ll max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkfZh0Sh8bnPr055q9ZJn9qXUQrrhnzMg6A&usqp=CAU"   />
  <div class="px-6 py-4">
    
  <Link href="manager">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Complaint Manager
                   </button>
                </Link>
  </div>
</div>
{/*  */}
{/*  */}
<div class="ll max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="data:image/png;base64,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"  />
  <div class="px-6 py-4">
    
  <Link href="viewAnnouncement">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Announcements
                   </button>
                </Link>
  </div>
</div>
{/*  */}
           
                
        </div>
      {/* <Footer />   */}
    </section>
  )
}

export default run