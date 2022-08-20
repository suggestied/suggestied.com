import { Dialog } from "@headlessui/react";

function DialogComponent(props) {
  return (
    <Dialog open={props.isOpen} onClose={() => props.setisOpen(false)}>
      <div className="fixed inset-0 bg-black/30 z-50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <Dialog.Panel className="mx-auto w-2/3 rounded-2xl shadow bg-white">
          {/* if props.title and props.description are undefined */}
          {props.title && props.description ? (
            <div className="border-b p-8">
              <Dialog.Title className={"text-2xl text-black font-medium"}>
                {props.title}
              </Dialog.Title>
              <Dialog.Description className={"text-lg text-gray-500"}>
                {props.description}
              </Dialog.Description>
            </div>
          ) : null}
          <div>{props.children}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default DialogComponent;
