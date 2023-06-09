<template>
    <div id="digits">
        <ul>
            <li>
                <div>
                    <div id="nft_detail">
                        <img src="../../../assets/images/frame/NTF_role.png" alt="">
                        <i>0.33</i>
                        <br>
                        <i>$111223</i>
                    </div>
                    <p>giao</p>
                    <p>不知道是啥</p>

                </div>
            </li>
        </ul>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#digits{
    width: 1050px;
    height: 500px;
    margin: 20px 20px;
    float: left;
    background-color: rgba(216, 220, 250, 0.1);

    border-radius: 20px;

    overflow: scroll;
    overflow-x: hidden;
    overflow-y: hidden;

    ul{
        list-style-type: none;

        li{

            div{
                width: 200px;
                height: 315px;
                border-radius: 10px;
                background-color: yellow;

                #nft_detail{
                    width: 200px;
                    height: 230px;
                    border-radius: 10px;

                    img{
                        width: 200px;
                        height: 180px;
                        border-radius: 10px;

                    }
                }

                p{
                    font-size: 14px;
                }
            }
        }
    }

}
</style>