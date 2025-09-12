import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';

const ProjectModal = (props) => {
    const { projectTitle, markdownPath, isOpen, setIsOpen } = props;

    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
    if (markdownPath && isOpen) {
      fetch(markdownPath)
        .then(res => res.text())
        .then(text => setMarkdownContent(text))
        .catch(err => console.error('Error fetching markdown:', err))

        console.log("Fetched markdown from:", markdownPath)
    }
  }, [markdownPath, isOpen])

    return (
        <>
        <button onClick={() => setIsOpen(true)}>Open dialog</button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="w-full max-w-3/7 rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 border-2 border-black shadow-[10px_10px_0px_0px_black] space-y-4">
                <DialogTitle className="font-bold">{projectTitle}</DialogTitle>
                <div className="prose max-h-156 overflow-y-auto overflow-x-hidden max-w-full">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
                    <div className="flex gap-4 justify-center">
                        <button className='font-bold max-w-8/9 border-2 bg-button-nohover border-black rounded-lg py-2 hover:bg-button-hover text-white w-full hover:scale-102' onClick={() => setIsOpen(false)}>Ok</button>
                    </div>
                </div>
                    
            </DialogPanel>
            </div>
        </Dialog>
        </>
    )
}

export default ProjectModal