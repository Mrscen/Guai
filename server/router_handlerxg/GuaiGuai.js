const db = require('../db/index1')

//创建动态的函数
exports.create_dynamic = (req, res) => {
    const sql = 'select * from dynamic where dynamic_id=?'
    db.query(sql, [req.body.dynamic_id], function (err, results) {
        if (err) {
            return res.cc(err);
        }
        if (results.length !== 0) {
            return res.cc('动态id已存在，请更换id!')
        }
        const sql = 'insert into dynamic set?'

        db.query(sql, { dynamic_id: req.body.dynamic_id, content: req.body.content, user_id: req.body.user_id, issue_date: req.body.issue_date, views_number: req.body.views_number, likes_number: req.body.likes_number, comments_number: req.body.comments_number }, function (err, results) {
            if (err) {
                return res.cc(err)
            }
            if (results.affectedRows !== 1) {
                return res.cc('创建动态失败!')
            }
            return res.cc('创建动态成功!', 0)
        })
    })
}

// 获取所有动态信息
exports.gets_dynamic = (req,res) => {
    const sql = `select * from dynamic`
    db.query(sql, (err, results) => {
        if (err) return res.cc('err')
        if (results.length == 0) {
            return res.cc('暂时没有任何动态!')
        }
        res.send({
            status: 0,
            message: '获取动态信息成功！',
            data: results,
        })
    })
}

//修改动态信息的函数
exports.add_dynamic_time = (req, res) => {
    const sql = 'select * from dynamic where dynamic_id=?'
    db.query(sql, { dynamic_id: req.body.dynamic_id}, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (results.length == 0) {
            return res.cc('该动态不存在,请先创建动态!')
        }
        const sql = 'update dynamic set?'
        db.query(sql, { content: req.body.content,user_id: req.body.user_id,views_number: req.body.views_number, likes_number: req.body.likes_number, comments_number: req.body.comments_number }, (err, results) => {
            if (err) {
                return res.cc(err)
            }
            if (results.affectedRows !== 1) {
                return res.cc('修改动态信息失败')
            }
            return res.cc('修改动态信息成功!', 0)
        })
    })
}

//获取某个成员的动态信息
exports.get_dynamic = (req, res) => {
    const sql = 'select * from dynamic where user_id=?'
    db.query(sql, [req.query.user_id], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (results.length == 0) {
            return res.cc('该用户并没有任何动态')
        }
        res.send({
            status: 0,
            message: '获取动态内容成功！',
            data: results,
        })
    })
}

//发布挑战的函数
exports.create_challenge = (req, res) => {
    const sql = 'insert into challenge set?'
    db.query(sql, { user_id:req.body.user_id, issue_date: req.body.issue_date, start_date: req.body.start_date, end_date: req.body.end_date, title: req.body.title, rule: req.body.rule, reward: req.body.reward, participants_number: req.body.participants_number,introduction: req.body.introduction, label: req.body.label, restrict:req.body.restrict } ,(err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (req.body.start_date == req.body.end_date) {
            return res.cc('挑战开始时间不能与挑战结束时间相同,请重新输入!')
        }
        if (results.affectedRows !== 1) {
            return res.cc('发布挑战失败!')
        }
        const sql = `select challenge_id from challenge where user_id=?`
        db.query(sql,[req.body.user_id],function(err,results){
            if(err) return res.cc(err)
            const challenge_id = results[0].challenge_id;
            const sql = 'insert into challenge_label set?'
            db.query(sql, { challenge_id: challenge_id, label: req.body.challenge_title }, (err, results) => {
                if (err) {
                    return res.cc(err)
                }
                if (results.affectedRows !== 1) {
                    return res.cc('发布挑战失败')
                }
                return res.cc('发布挑战成功!', 0)
            })
        })
    })
}

//查看挑战情况的函数
exports.get_challenge_info = (req, res) => {
    const sql = 'select * from challenge'
    db.query(sql, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (results.length == 0) {
            return res.cc('查无此挑战!')
        }
        res.send({
            status: 0,
            message: '查询成功!',
            data: results,
        })
    })
}

//邀请用户函数
exports.invite_member = (req, res) => {
    const inviterSql = 'select * from invite where invitee_id=?'
    db.query(inviterSql, [req.body.invitee_id], function (err, inviterResults) {
        if (err) {
            return res.cc(err)
        }
        if (inviterResults.length !== 0) {
            return res.cc('此用户已被邀请')
        }
        const sql = 'insert into invite set?'
        db.query(sql, { inviter_id: req.body.inviter_id, invitee_id: req.body.invitee_id }, (err, results) => {
            if (err) {
                return res.cc(err)
            }
            if (results.affectedRows !== 1) {
                return res.cc('邀请用户失败')
            }
            const getSql = `select invite_number from user where user_id=?`
            db.query(getSql,[req.body.inviter_id],function(err,numberResults){
                if(err) return res.cc(err);
                const inviteNumber = numberResults[0].invite_number;
                const userSql = 'update user set invite_number=? where user_id=?'
                db.query(userSql, [inviteNumber + 1 ,req.body.inviter_id],function (err, userResults) {
                    if (err) {
                        return res.cc(err)
                    }
                    if (userResults.affectedRows !== 1) {
                        return res.cc('邀请用户失败')
                    }
                    return res.cc('邀请用户成功!', 0)
                })
            })
        })
    })
}


//增加用户的函数
exports.add_user = (req, res) => {
    const sql = 'insert into user set?'
    db.query(sql, { user_address: req.body.user_address, user_id: req.body.user_id, head_url: req.body.head_url, background_url: req.body.background_url, invite_number: req.body.invite_member }, function (err, results) {
        if (err) {
            return res.cc(err)
        }
        if (results.affectedRows !== 1) {
            return res.cc('增加用户失败!')
        }
        return res.cc('增加用户信息成功!', 0)
    })
}

//获取活动的函数
exports.get_activity = (req, res) => {
    const sql = 'select * from  activity'
    db.query(sql, function (err, results) {
        if (err) {
            return res.cc(err)
        }
        if (results.length == 0) {
            return res.cc('暂时没有任何活动!')
        }
        res.send({
            status: 0,
            message: '获取活动信息成功!',
            data: results,
        })
    })
}

//添加活动的函数
exports.add_activity = (req, res) => {
    const sql = 'select * from activity where activity_id=?'
    db.query(sql, [req.body.activity_id], function (err, results) {
        if (err) {
            return res.cc(err);
        }
        if (results.length !== 0) {
            return res.cc('活动id已存在,请更换id!')
        }
        const sql = 'insert into activity set?'

        db.query(sql, { activity_id: req.body.activity_id, content: req.body.content, start_time: req.body.start_time, end_time: req.body.end_time, picture_url: req.body.picture_url, title: req.body.title,introduction: req.body.instroduction,label: req.body.label,restrict: req.body.restrict },function (err, results) {
            if (err) {
                return res.cc(err)
            }
            if (results.affectedRows !== 1) {
                return res.cc('添加活动失败!')
            }
            return res.cc('添加活动成功!', 0)
        })
    })
}

// 获取公告信息数据的处理函数
exports.getAnnouncement = (req, res) => {
    const sql = `select * from announcement`
    db.query(sql, (err, results) => {
        if (err) return res.cc('err')
        if (results.length == 0) {
            return res.cc('暂时没有任何公告!')
        }
        res.send({
            status: 0,
            message: '获取公告信息成功！',
            data: results,
        })
    })
}

//增加公告的函数
exports.addAnnouncement = (req, res) => {
    const sql = 'insert into announcement set?'
    db.query(sql, { id: req.body.id, content: req.body.content, user_id: req.body.user_id ,issue_date: req.body.issue_date}, function (err, results) {
        if (err) {
            return res.cc(err)
        }
        if (results.affectedRows !== 1) {
            return res.cc('增加公告失败!')
        }
        return res.cc('增加公告信息成功!', 0)
    })
}

// 删除文章分类的处理函数
exports.deleteAnnouncement = (req, res) => {
    const sql = `delete from announcement where id=?`
    db.query(sql, req.query.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('删除公告失败！')
        res.cc('删除公告成功！', 0)
    })
}

// 根据 Id 获取公告信息的处理函数
exports.getAnnounCement = (req, res) => {
    const sql = `select * from announcement where id=?`
    db.query(sql, req.query.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('获取公告信息失败！')
        res.send({
            status: 0,
            message: '获取公告信息数据成功！',
            data: results[0],
        })
    })
}

// 更新公告信息的处理函数
exports.updateAnnouncement = (req, res) => {
    const sql = `select * from announcement where Id<>? and (content=? or user_id=?)`
    db.query(sql, [req.body.Id, req.body.content, req.body.user_id], (err, results) => {
        if (err) return res.cc(err)
        if (results.length === 2) return res.cc('公告名称与别名被占用，请更换后重试！')
        if (results.length === 1 && results[0].content === req.body.content) return res.cc('公告名称与别名被占用，请更换后重试！')
        if (results.length === 1 && results[0].user_id === req.body.user_id) return res.cc('公告名称与别名被占用，请更换后重试！')
        const sql = `update announcement set ? where Id=?`
        db.query(sql, [req.body, req.body.Id], (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) res.cc('更新公告信息失败！')
            res.cc('更新公告信息成功！', 0)
        })
    })
}

// 获取装扮基本信息的处理函数
exports.getClothing = (req, res) => {
    const sql = `select * from  clothing`

    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        if (results.length === 0) return res.cc('暂时没有任何装扮信息！')
        res.send({
            status: 0,
            message: '获取装扮信息基本成功！',
            data: results,
        })
    })
}

// 添加装扮基本信息的处理函数
exports.addClothing = (req, res) => {
    const sql = 'select * from clothing where clothing_id=?'
    db.query(sql, [req.body.clothing_id], function (err, results) {
        if (err) {
            return res.cc(err);
        }
        if (results.length !== 0) {
            return res.cc('装扮id已存在,请更换id!')
        }
        const sql = 'insert into clothing set?'

        db.query(sql, { clothing_id: req.body.clothing_id, picture_url: req.body.picture_url, price: req.body.price, type: req.body.type }, function (err, results) {
            if (err) {
                return res.cc(err)
            }
            if (results.affectedRows !== 1) {
                return res.cc('添加装扮失败!')
            }
            return res.cc('添加装扮成功!', 0)
        })
    })
}

// 获取3D建模基本信息的处理函数
exports.get_equip = (req, res) => {
    const sql = `select * from  equip`

    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        if (results.length === 0) return res.cc('暂时没有任何3D建模信息！')
        res.send({
            status: 0,
            message: '获取3D建模信息成功！',
            data: results,
        })
    })
}

// 添加3D建模信息的处理函数
exports.add_equip_time = (req, res) => {
    const sql = 'insert into equip set?'
    db.query(sql, { address: req.body.address,clothing: req.body.clothing, clothing_active: req.body.clothing_active, skin: req.body.skin, skin_active:req.body.skin_active, shoot:req.body.shoot, shoot_active:req.body.shoot_active, pants:req.body.pants, pants_active:req.body.pants_active, sunglass:req.body.sunglass, sunglass_active:req.body.sunglass_active, hair:req.body.hair, hair_active:req.body.hair_active }, function (err, results) {
        if (err) {
            return res.cc(err)
        }
        if (results.affectedRows !== 1) {
            return res.cc('添加3D建模失败!')
        }
        return res.cc('添加3D建模成功!', 0)
    })
}

//修改3D建模信息的函数
exports.update_equip_time = (req, res) => {
    const sql = 'select * from equip where id=?'
    db.query(sql, [req.body.id], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (results.length == 0) {
            return res.cc('该id不存在,请更换!')
        }
        const sql = 'update equip set?'
        db.query(sql, { address:req.body.address, clothing: req.body.clothing, clothing_active: req.body.clothing_active, skin: req.body.skin, skin_active:req.body.skin_active, shoot:req.body.shoot, shoot_active:req.body.shoot_active, pants:req.body.pants, pants_active:req.body.pants_active, sunglass:req.body.sunglass, sunglass_active:req.body.sunglass_active, hair:req.body.hair, hair_active:req.body.hair_active }, (err, results) => {
            if (err) {
                return res.cc(err)
            }
            if (results.affectedRows !== 1) {
                return res.cc('修改3D建模信息失败')
            }
            return res.cc('修改3D建模信息成功!', 0)
        })
    })
}