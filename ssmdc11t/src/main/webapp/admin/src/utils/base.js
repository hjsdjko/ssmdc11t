const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmdc11t/",
            name: "ssmdc11t",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmdc11t/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "健身管理系统及会员微信小程序"
        } 
    }
}
export default base
