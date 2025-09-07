import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

const ProjectModal = (props) => {
    const { projectTitle, description, isOpen, setIsOpen } = props;

    return (
        <>
        <button onClick={() => setIsOpen(true)}>Open dialog</button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 border-2 border-black shadow-[10px_10px_0px_0px_black] space-y-4">
                <DialogTitle className="font-bold">{projectTitle}</DialogTitle>
                <Description>{description}</Description>
                <div className="flex gap-4 justify-center">
                    <button className='font-bold border-2 bg-button-nohover border-black rounded-lg py-2 hover:bg-button-hover text-white w-full hover:scale-102' onClick={() => setIsOpen(false)}>Ok</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
        </>
    )
}

export default ProjectModal