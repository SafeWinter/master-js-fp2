describe('once', () => {
    beforeEach(() => {
        window.myFn = () => {};
        spyOn(window, 'myFn');
    });

    it("without 'once', a function always runs", () => {
        myFn();
        myFn();
        myFn();
        expect(myFn).toHaveBeenCalledTimes(3);
    });

    it("with 'once', a function runs one time", () => {
        window.onceFn = once(window.myFn);
        spyOn(window, 'onceFn').and.callThrough();
        onceFn();
        onceFn();
        onceFn();
        expect(onceFn).toHaveBeenCalledTimes(3);
        expect(myFn).toHaveBeenCalledTimes(1);
    });
});
