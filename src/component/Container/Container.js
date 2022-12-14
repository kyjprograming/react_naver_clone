import React from 'react';
import './Container.css'
const ContainerLeft = () => {
    const [state, setState] = React.useState('tab')
    const list_icon = state === 'list' ? require('../../image/list_icon_focus.png') : require('../../image/list_icon_unfocus.png')
    const tab_icon = state === 'tab' ? require('../../image/tab_icon_focus.png') : require('../../image/tab_icon_unfocus.png')
    return(
        <div className='container_left'>
            <div className='container_1 hover'>
                <a href='#'><img src={require('../../image/container_img1.jpg')}/></a>
            </div>
            <div className='container_2'>
                <span className='title_1 hover'>연합뉴스</span>
                <span className='more_icon hover'>
                    <img src={require('../../image/more_icon.png')}/>
                </span>
                <span className='news' style={{marginRight: 180}}>세계은행·IMF "내년 세계경제 하방 위험 확대 가능성"</span>
                <span className='news_home bold left_blank hover'>뉴스홈</span>
                <span className='dot'>ㆍ</span>
                <span className='entertainment bold hover'>연예</span>
                <span className='entertainment bold left_blank hover'>스포츠</span>
                <span className='entertainment bold left_blank hover'>경제</span>             
            </div>
            <div className='container_3'>
                <span className='news_icon hover'>
                    <img src={require('../../image/news_icon.png')}/>
                </span>
                <span className='hover bold'>뉴스스탠드</span>
                <span className='more_icon hover'>
                    <img src={require('../../image/more_icon.png')}/>
                </span>
                <span className='hover'>구독한 언론사</span>
                <span className='dot hover'>ㆍ</span>
                <span className='bold hover' style={{marginRight: 370}}>전체언론사</span>
                <span className='list_icon hover' onClick={() => setState('list')}>
                    <img src={list_icon}/>
                </span>
                <span className='tab_icon hover' onClick={() => setState('tab')}>
                    <img src={tab_icon}/>
                </span>
                <span className='set_icon hover'>
                    <a href='#'><img src={require('../../image/setting_icon.png')}/></a>
                </span>
            </div>
            <div className='container_4'>
                <table className='news_companys'>

                </table>
            </div>
        </div>
    )
}

const ContainerRight = () => {
    return(
        <div className='container_right'>
            <div className='profile_box'>
                <div className='profile_top'>
                    <div className='profile_image'>
                        <img src={require('../../image/profile_icon.png')}/>
                    </div>
                    <div className='profile_info'>
                        <div className='info_top'>
                            <span className='profile_name'>김액트님</span>
                            <span className='profile_slice'> | </span>
                            <span className='profile_id'>네이버ID</span>
                            <input type='button' value="로그아웃" className='logout_button'/>
                        </div>
                        <div className='info_middle'>
                            <span className='email'>yjkim5908@naver.com</span>
                        </div>
                        <div className='info_bottom'>
                            <div className='mail_div'>
                            <span className='mail'>메일</span>
                            <span className='mail_cnt'>515</span>
                            </div>
                            <div className='post_div'>
                            <span className='post'>쪽지</span>
                            <span className='post_cnt'>0</span>
                            </div>
                            <span className='temp hover'>
                            <img className='member_ship_icon' src={require('../../image/member_ship_icon.png')}/>
                            <div className='start_div'>
                            <span className='member_ship_start'>시작하기</span>
                            <img className='start_more_icon' src={require('../../image/more_icon.png')}/>
                            </div>
                            </span>
                        </div>
                        <span className=''></span>
                    </div>
                </div>
                <div className='profile_bottom'>
                    <div className='button'>알림</div>
                    <div className='button'>구독</div>
                    <div className='button'>메일</div>
                    <div className='button'>카페</div>
                    <div className='button'>블로그</div>
                </div>
            </div>
            <div className='container_image2'>
                <img src={require('../../image/container_img2.png')}/>
            </div>
        </div>
    )
}
const Container = () => {
    return(
        <div id="container">
            <ContainerLeft/>
            <ContainerRight/>
        </div>
    )
};

export default Container;