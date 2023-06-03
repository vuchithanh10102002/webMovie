import React from 'react'
import './Footer.css'

const list = [
    {
        title: 'About MyNetFlix',
        child: [
            {
                name: 'About us',
            },
            {
                name: 'Products and Services'
            },
            {
                name: 'Ways to Watch'
            }
        ]
    },
    {
        title: 'Help and support',
        child: [
            {
                name: 'Feedback',
            },
            {
                name: 'Security Response Center',
            },
            {
                name: 'FAQ',
            }
        ]
    },
    {
        title: 'Term of Service',
        child: [
            {
                name: 'Privacy Policy'
            },
            {
                name: 'Term of Service'
            }
        ]
    }
]
function FooterIndex() {
    return (
        <div className='ft'>
            <div className='footer'>
                <h1>MyNetFlix</h1>
                <div className='footer_info'>
                    {list.map((item, index) => (
                        <ul key={index} className='titles'><p>{item.title}</p>
                            {item.child.map((child, index) => (
                                <li className='titles_items' key={index} style={{ padding: '10px 0' }}>{child.name}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
            <div className="footerMedia">
                <span className="copyright">Copyright © 2021 iQiyi All Rights Reserved
                    We use cookies to improve your experience on this site. By continuing to use our website, you agree to our use of cookies</span>
                <div className="media">
                </div>
            </div>
        </div>
    )
}
 
export default FooterIndex