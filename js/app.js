

const app = new Vue ( {
    el:'#app',
    data: {
        arrayMail: [],
        currentIndex: 0
    },
    mounted() {

        for(i=0; i<=10; i++) {            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                // console.log(res)
                this.arrayMail.push(res.data.response)                 
            })
        }
    }
})

