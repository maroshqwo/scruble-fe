import Socket from "@/socket";

export const testAction = () => {
  Socket.chat.hello({ message: "this" });
};

export const testAction2 = () => ({
  type: "TEST_ACTION2",
});
