export class UserAuth{
    isLoggin = false

    isAuthenticated(){
        const promise = new Promise(
            (resolve,reject) => {
                setTimeout(()=>{
                    resolve(this.isLoggin)
                },800)
            }
        )
        return promise
    }

    login(){
        this.isLoggin = true
    }

    logout(){
        this.isLoggin = false
    }
}