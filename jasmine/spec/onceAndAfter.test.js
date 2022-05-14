describe("onceAndAfter", () => {
  it("should call the first function once, and the other after", () => {
    func1 = () => {};
    spyOn(window, "func1");
    func2 = () => {};
    spyOn(window, "func2");
    onceFn = onceAndAfter(func1, func2);

    onceFn();
    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(0);

    onceFn();
    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(1);

    onceFn();
    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(2);

    onceFn();
    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(3);
  });
});
