// 导入智能合约连接实例
import contract from '@/utils/contract'

const Contract = contract.contract.methods

/*** 基础功能类 ***/
/** 
 * 检查是否注册
 * @param {string} address 
 * @returns 
 */
export const checkRegister = (address) =>
  Contract.checkRegister(address)
/** 
 * 注册
 * @param {string} address 
 * @returns 
 */
export const register = () =>
  Contract.register()
/** 
 * 检查是否签到
 * @param {string} address 
 * @returns 
 */
export const checkSign = (address, currentTime) =>
  Contract.checkSign(address, currentTime)
/**
 * 签到
 * @param {string} address 
 * @param {string} lastTime 
 * @param {string} currentTime 
 * @returns 
 */
export const sign = (address, lastTime, currentTime) =>
  Contract.sign(address, lastTime, currentTime)

/**
 * 返回签到数
 * @param {string} address 
 * @returns 
 */
export const getSign = (address) =>
  Contract.getSign(address)

/**
 * 检查是否可邀请
 * @param {string} address 
 * @param {string} invitedAdress 
 * @returns 
 */
export const checkInvite = (address, invitedAdress) =>
  Contract.checkInvite(address, invitedAdress)

/**
 * 邀请
 * @param {string} address 
 * @param {string} invitedAdress 
 * @returns 
 */
export const invited = (address, invitedAdress) =>
  Contract.invited(address, invitedAdress)



/*** 资金积分类 ***/
/**
 * 填充合约资金
 * @param {uint256} amount 数量
 * @returns 
 */
export const fillBalanceOfContract = (amount) =>
  Contract.fillBalanceOfContract(amount)

/**
 * 查看合约资金
 * @returns 
 */
export const getBalanceOfContract = () =>
  Contract.getBalanceOfContract()

/**
 * 提取资金到账户
 * @param {uint256} amount 提取的数量
 * @returns 
 */
export const withdraw = () =>
  Contract.withdraw()

/*** NFT类 ***/

/**
 * 获取对应NFT元数据
 * @param {uint256} tokenID 
 * @returns 
 */
export const getImformation = (tokenID) =>
  Contract.getImformation(tokenID)

/**
 * 获取NFT元数据
 * @param {string} uri 
 * @param {string} name 
 * @param {uint256} tokenID 
 * @returns 
 */
export const getTokenURI = (uri, name, tokenID) =>
  Contract.getTokenURI(uri, name, tokenID)

/**
 * 查看对应NFT经验值
 * @param {uint256} tokenID NFT编号id
 * @returns 
 */
export const getEXP = (tokenID) =>
  Contract.getEXP(tokenID)

/**
 * 获取对应NFT等级
 * @param {uint256} tokenID 
 * @returns 
 */
export const getLevel = (tokenID) =>
  Contract.getLevel(tokenID)

/**
 * 增加对应NFT的经验
 * @param {uint256} tokenID NFT编号id
 * @param {uint256} exp  经验
 * @returns 
 */
export const addEXP = (tokenID, exp) =>
  Contract.addEXP(tokenID, exp)

/**
 * 检查该NFT是否注册
 * @param {string} name 名字
 * @param {string} address 地址
 * @returns 
 */
export const checkMint = (name, address) =>
  Contract.checkMint(name, address)

/**
 * 铸造一个NFT
 * @param {string} name 名字
 * @param {string} description 梦想标签
 * @returns 
 */
export const mint = (name, description) =>
  Contract.mint(name, description)


/**
 * 获取账户NFT数量
 * @param {string} account 账户地址
 * @returns 
 */
export const getNFTAmount = (account) =>
  Contract.getNFTAmount(account)

/**
 * 获取地址所有NFT的元数据（json格式）
 * @param {string} account 
 * @returns 
 */
export const getTokenuirs = (account) =>
  Contract.getTokenuirs(account)

/**
 * 获取地址所有NFT的信息
 * @param {string} account 
 * @returns
 */
export const getAll = (account) =>
  Contract.getAll(account)
/**
 * 发行nft
 * @param {uint256} tokenID 
 * @param {array} initPictureArray 
 * @param {array} showPictureArray 
 * @returns
 */
export const issue = (tokenID,initPictureArray,showPictureArray) =>
  Contract.issue(tokenID,initPictureArray,showPictureArray)


/*** 智能合约发放奖励 ***/
export const distributeRewards = (account,rewards) =>
  Contract.distributeRewards(account,rewards)