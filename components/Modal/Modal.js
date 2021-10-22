import { useRecoilState } from "recoil"
import { modalState } from "../../atoms/modalAtome"

function Modal() {

    const [open, setOpen] = useRecoilState(modalState)

    return (
        <div>
            {open && (
                <p>I am modal</p>
            )}
        </div>
    )
}

export default Modal
