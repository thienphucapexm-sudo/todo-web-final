// @vitest-environment jsdom

import { describe, expect, it, vi, beforeEach } from "vitest";
import { attachTodoListEvents, deleteTodo, updateTodo } from "../../src/todoStore.js";

describe("todoStore globals", () => {
  it("phải đăng ký updateTodo và deleteTodo đúng lên window", () => {
    expect(typeof window.updateTodo).toBe("function");
    expect(window.updateTodo).toBe(updateTodo);
    expect(window.deleteTodo).toBe(deleteTodo);
  });
});

describe("attachTodoListEvents", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = `
      <ul id="todo-list">
        <li>
          <button type="button" class="btn-delete" data-id="1">❌Xóa</button>
        </li>
      </ul>
    `;
    vi.spyOn(window, "confirm").mockReturnValue(true);
  });

  it("gọi đúng handler khi người dùng bấm nút xóa", async () => {
    const deleteTodoMock = vi.fn().mockResolvedValue({});
    const onMessage = vi.fn();

    const list = document.getElementById("todo-list");

    attachTodoListEvents(list, "http://localhost:3000/todos", deleteTodoMock, onMessage);

    list.querySelector(".btn-delete").dispatchEvent(new Event("click", { bubbles: true }));
    await Promise.resolve();

    expect(deleteTodoMock).toHaveBeenCalledWith("http://localhost:3000/todos", "1");
    expect(onMessage).toHaveBeenCalledWith("Đã xóa công việc 1 thành công!");
  });
});