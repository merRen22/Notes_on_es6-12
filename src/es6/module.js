function hello() {
  return 'Hello!';
}

// this right here 👇 is a defualt export and will only work for one export on a file
export default hello;

// In case of wanting to export more than one func/const from a file
// use a named export such as below 👇
//  export function hello() {
//	    return 'Hello!'
//  }
//
//  export const bye = 'Bye!'
