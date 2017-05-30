let superclass = () => {};

let foo = superclass.subclass((that, my) => {
    that.foobar = function() {
		return false;
    };
});

let myobj = foo();

myobj; //: Object

myobj.foobar; // fn() -> bool
