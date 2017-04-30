import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as lexer from './parsers/examples/java8/Java8Lexer';
import * as parser from './parsers/examples/java8/Java8Parser';

// This is the scary part that you don't need to worry about.
let inputStream = new ANTLRInputStream(`
public class HelloWorld {
   public static void main(String[] args) {
      System.out.println("Hello, World");
   }
}
`);
let l = new lexer.Java8Lexer(inputStream);
let tokenStream = new CommonTokenStream(l);
let p = new parser.Java8Parser(tokenStream);

let result = p.compilationUnit();
console.log(result);
