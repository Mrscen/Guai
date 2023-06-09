const express = require('express')
const router = express.Router()
const expressJoi = require('@escook/express-joi')
// 创建动态的路由处理函数模块
const dynamic_handler = require('../router_handlerxg/GuaiGuai')

const { create_dynamic_schema, add_dynamic_time_schema, get_dynamic_schema } = require('../schema/GuaiGuai')
const { create_challenge_schema, invite_member_schema, adduser_schema, add_activity_schema, get_activity_schema } = require('../schema/GuaiGuai')

const announcement_handler = require('../router_handlerxg/GuaiGuai')
const { add_cement_schema, delete_cement_schema, get_cement_schema, update_cement_schema } = require('../schema/GuaiGuai')

const clothing_handler = require('../router_handlerxg/GuaiGuai')
const { add_clothing_schema } = require('../schema/GuaiGuai')

const equip_handler = require('../router_handlerxg/GuaiGuai')
const { add_equip_schema, update_equip_schema } = require('../schema/GuaiGuai')

// 创建动态的函数
router.post('/create_dynamic', expressJoi(create_dynamic_schema), dynamic_handler.create_dynamic)

// 获取动态信息的路由
router.get('/gets_dynamic',dynamic_handler.gets_dynamic)

//修改动态信息的路由
router.put('/add_dynamic_time', expressJoi(add_dynamic_time_schema), dynamic_handler.add_dynamic_time)

//获取某个成员的动态信息的路由
router.get('/get_dynamic', expressJoi(get_dynamic_schema), dynamic_handler.get_dynamic)

//发布挑战的函数的路由
 
router.post('/create_challenge', expressJoi(create_challenge_schema), dynamic_handler.create_challenge)

//查看挑战情况的函数的路由
router.get('/get_challenge_info', dynamic_handler.get_challenge_info)

//邀请用户函数的路由
router.put('/invite_member', expressJoi(invite_member_schema), dynamic_handler.invite_member)

//增加用户的函数的路由
router.post('/add_user', expressJoi(adduser_schema), dynamic_handler.add_user)

//获取活动的函数的路由
router.get('/get_activity', expressJoi(get_activity_schema), dynamic_handler.get_activity)

//添加活动的函数的路由·
router.post('/add_activity', expressJoi(add_activity_schema), dynamic_handler.add_activity)

// 获取公告的基本信息
router.get('/cement', announcement_handler.getAnnouncement)

// 添加公告的基本信息
router.post('/add', expressJoi(add_cement_schema), announcement_handler.addAnnouncement)

// 删除公告的基本信息
router.delete('/delete', expressJoi(delete_cement_schema), announcement_handler.deleteAnnouncement)

// 根据公告id获取相应的基本信息
router.get('/cement/:id', expressJoi(get_cement_schema), announcement_handler.getAnnounCement)

// 更新公告的基本信息
router.put('/update', expressJoi(update_cement_schema), announcement_handler.updateAnnouncement)

// 获取装扮的基本信息
router.get('/clothing', clothing_handler.getClothing)

// 添加装扮的基本信息
router.post('/clothing', expressJoi(add_clothing_schema), clothing_handler.addClothing)


// 获取3D建模的基本信息
router.get('/equip', equip_handler.get_equip)

// 添加3D建模的基本信息
router.post('/add_equip', expressJoi(add_equip_schema), equip_handler.add_equip_time)

//修改3D建模信息的路由
router.put('/update_equip', expressJoi(update_equip_schema), equip_handler.update_equip_time)

module.exports = router