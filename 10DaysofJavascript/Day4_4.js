function getCount(objects) {
    return objects.filter((item)=> item.x === item.y).length;
}