function readonly(target, name, descriptor){
  descriptor.writable = false;
  return descriptor;
}

class Job{
  @readonly
  title() { return 'CEO'}
}
