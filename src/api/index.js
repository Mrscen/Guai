// 导入 axios封装
import request from '../utils/request'

// 导入 智能合约
import * as contractApi from './contract'

export default {
    contractApi
}

// 获取 装扮 信息 √
export function getDress(){
    return request({
        url:'/clothing',
        method:'GET',
    })
}

// // 添加 装扮 信息
// export function addDress(){
//     return request({
//         url:'/clothing',
//         method:'POST',
//         data:{
//             clothing_id,
//             picture_url,
//             price,
//             type
//         }
//     })
// }

// 获取 所有公告 信息 √
export function getAffiche(){
    return request({
        url:'/cement',
        method:'GET',
    })
}

// // 增加 公告 信息
// export function addAffiche(){
//     return request({
//         url:'/add',
//         method:'POST',
//         data:{
//             id,
//             content,
//             user_id
//         }
//     })
// }

// // 更改 公告 信息
// export function updateAffiche(){
//     return request({
//         url:'/xg/update',
//         method:'PUT',
//         data:{
//             id,
//             content,
//             user_id
//         }
//     })
// }

// // 获取 根据公告id 的对应信息
// export function getByAfficheId(){
//     return request({
//         url:'/cement/:id',
//         method:'GET',
//         params:{
//             id
//         }
//     })
// }

// 获取 所有动态 信息 √
export function getAllMoment(){
    return request({
        url:'/gets_dynamic',
        method:'GET',
    })
}

// 创建 动态
export function addMoment(){
    return request({
        url:'/create_dynamic',
        method:'POST',
        data:{
            dynamic_id,
            dynamic_content,
            user_id,
            issue_data, // 时间
    
        }
    })
}

// 修改 动态 信息
export function updateMoment(){
    return request({
        url:'/xg/add_dynamic_time',
        method:'PUT',
        data:{
            dynamic_id,
            user_id,
            content
        }
    })
}

// 获取 某个成员 动态
export function getMoment(){
    return request({
        url:'/xg/get_dynamic',
        method:'GET',
        params:{
            user_id
        }
    })
}

// 发布 挑战 √
export function addChallenge(data){
    return request({
        url:'/create_challenge',
        method:'post',

        data
        // body: {
        //     user_id: form.user_id,
        //     // 创建挑战时间
        //     // issue_data: form.issue_data,
        //     // // 挑战主题
        //     // title: form.title,
        //     // // 挑战介绍
        //     // introduction: form.introduction,
        //     // // 挑战规则
        //     // rule: form.rule,
        //     // // 挑战标签
        //     // label: form.label,
        //     // // 挑战开始时间
        //     // start_time: form.start_time,
        //     // // 挑战结束时间
        //     // end_time: form.end_time,
        //     // // 挑战限制
        //     // restrict: form.restrict,
        // }
    })
}

// 查看 挑战 √
export function getChallenge(){
    return request({
        url:'/get_challenge_info',
        method:'GET',
    })
}

// 邀请用户
export function inviteMember(){
    return request({
        url:'/xg/invite_member',
        method:'PUT',
        query:{
            inviter_id,
            invitee_id
        }
    })
}

// 新添用户
export function addMember(){
    return request({
        url:'/xg/add_user',
        method:'POST',
        data:{
            user_address,
            user_id
        }
    })
}

// 获取活动
export function getActivity(){
    return request({
        url:'/xg/get_activity',
        method:'GET',
        params:{
            activity_id
        }
    })
}

// 添加活动
export function addActivity(){
    return request({
        url:'/xg/addActivity',
        method:'POST',
        data:{
            activity_id,
            content,
            start_time,
            title,
            end_time
        }
    })
}

// 获取 总排行榜 信息
export function getOverAllRankList(){
    return request({
        url:'',
        method:'GET',
        data:{
        }
    })
}

// 获取 3D建模
export function getModel(){
    return request({
        url:'/equip',
        method:'GET',
    })
}

// 添加 3D建模
export function addModel(){
    return request({
        url:'add_equip',
        method:'POST',
        data: {
            address,
            clothing,
            clothing_active,
            skin,
            skin_active,
            shoot,
            shoot_active,
            pants,
            pants_active,
            sunglass,
            sunglass_active,
            hair,
            hair_active,
        }
    })
}

// 修改 3D建模
export function updateModel(){
    return request({
        url:'update_equip',
        method: 'PUT',
        data: {
            address,
            clothing,
            clothing_active,
            skin,
            skin_active,
            shoot,
            shoot_active,
            pants,
            pants_active,
            sunglass,
            sunglass_active,
            hair,
            hair_active,
            id,
        }
    })
}