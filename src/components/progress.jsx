function Progress(props){
    return(
        <div class="progress col-4" style={{height: "5px", width:"400px"}}>
                  <div class="progress-bar" role="progressbar" style={{width: props.percent}}></div>
               </div>
    )
}
export default Progress;