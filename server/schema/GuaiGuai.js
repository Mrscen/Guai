const joi = require('joi')

const dynamic_id = joi.number().integer().min(1).required()
const dynamic_content = joi.string().required()
const user_id = joi.number().integer().min(1).required()
const issue_date = joi.string().required()
const start_date = joi.string().required()
const end_date = joi.string().required()
const challenge_id = joi.number().integer().min(1).required()
const title = joi.string().required()
const rule = joi.string().required()
const reward = joi.number().integer().required()
const user_address = joi.string().required()
const activity_id = joi.number().integer().min(1).required()
const content = joi.string().required()
const inviter_id = joi.number().integer().min(1).required()
const invitee_id = joi.number().integer().min(1).required()
const start_time = joi.string().required()
const end_time = joi.string().required()
const id = joi.number().integer().min(1).required()
const clothing_id = joi.number().integer().min(1).required()
const picture_url = joi.string().required()
const price = joi.number().integer().min(1).required()
const type = joi.string().required()
const introduction = joi.string().required()
const label = joi.string().required()
const restrict = joi.string().required()
const address = joi.string().required()
const clothing = joi.string().required()
const clothing_active = joi.string().required()
const skin = joi.string().required()
const skin_active = joi.string().required()
const shoot = joi.string().required()
const shoot_active = joi.string().required()
const pants = joi.string().required()
const pants_active = joi.string().required()
const sunglass = joi.string().required()
const sunglass_active = joi.string().required()
const hair = joi.string().required()
const hair_active = joi.string().required()
const participants_number = joi.number().integer().min(1).required()

//创建动态的模块
exports.create_dynamic_schema = {
    body: {
        dynamic_id,
        dynamic_content,
        user_id,
        issue_date,
    },
}

//修改动态内容的验证模块
exports.add_dynamic_time_schema = {
    body: {
        dynamic_id,
        user_id,
        content,
    },
}
//获取成员动态信息的路由
exports.get_dynamic_schema = {
    query: {
        user_id,
    },
}

//创建挑战的验证模块
exports.create_challenge_schema = {
    body: {
        user_id,
        issue_date,
        start_date,
        end_date,
        title,
        rule,
        reward,
        participants_number,
        introduction,
        label,
        restrict,
    },
}

//邀请者的验证模块
exports.invite_member_schema = {
    body: {
        inviter_id,
        invitee_id,
    },
}

//增加用户的验证模块
exports.adduser_schema = {
    body: {
        user_address,
        user_id,
    },
}

//创建活动的验证模块
exports.add_activity_schema = {
    body: {
        activity_id,
        content,
        start_time,
        end_time,
        picture_url,
        title,
        introduction,
        label,
        restrict,
    },
}

//获取活动的验证模块
exports.get_activity_schema = {
    query: {
        activity_id,
    },
}

// 校验规则对象 - 添加公告
exports.add_cement_schema = {
    body:{
        id,
        content,
        user_id,
        issue_date,
    }
}

//删除公告
exports.delete_cement_schema = {
    query: {
        id,
    }
}

//根据id获取公告
exports.get_cement_schema = {
    query :{
        id,
    }
}

//更新公告
exports.update_cement_schema = {
    body:{
        Id: id,
        content,
        user_id,
    },
}

exports.reg_login_schema = {
    // 表示需要对 req.body 中的数据进行验证
    body: {
        user_id,
        user_address,
    },
}

// 验证规则对象 - 更新装扮基本信息
exports.add_clothing_schema = {
    body: {
        clothing_id,
        picture_url,
        price,
        type,
    },
}

// 添加3D建模基本信息
exports.add_equip_schema = {
    body: {
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
    },
}

// 修改3D建模基本信息
exports.update_equip_schema = {
    body: {
        id,
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
    },
}