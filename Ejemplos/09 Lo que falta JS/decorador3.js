let variable = function (object) {
    object.property = 'characteristic';
}

// Use as decorator
@variable
class GFG { }
console.log(GFG.property);
console.log(GFG);