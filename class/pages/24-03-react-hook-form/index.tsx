import { useForm } from 'react-hook-form' 

interface IFormValues{
    writer? : string,
    title?: string,
    contents?: string
}

export default function ReactHookFormPage(){

    const { register, handleSubmit, formState } = useForm()
    formState.isSubmitting
    // 등록하기 여러번 누르면 여러번 등록되는 것 막고, 한번만 등록되게 하기
    // 한번 누르고 버튼 disabled로 하기위해서 


    const onClickSubmit = (data: IFormValues) =>{
        console.log(data)
    }

    

    return(
        <form onSubmit={handleSubmit(onClickSubmit)}>
            작성자 : <input type="text" {...register("writer")}/>
            제목 : <input type="text" {...register("title")}/>
            내용 : <input type="text" {...register("contents")}/>
            <button disabled={formState.isSubmitting}>등록하기</button>
            {/* isSubmitting이 true이면 버튼 disables */}
        </form>
    )
}