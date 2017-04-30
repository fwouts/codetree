import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as fs from 'fs';
import { AstLexer } from './parsers/ast/AstLexer';
import { AstParser } from './parsers/ast/AstParser';
import { Java8Lexer } from './parsers/examples/java8/Java8Lexer';
import { Java8Parser } from './parsers/examples/java8/Java8Parser';

runAstCodeParser();
runJavaCodeParser();

function runAstCodeParser() {
  let code = fs.readFileSync('./src/parsers/examples/java8/Java8.ast').toString();
  let inputStream = new ANTLRInputStream(code);
  let lexer = new AstLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new AstParser(tokenStream);

  for (let ruleBlock of parser.ruleBlocks().ruleBlock()) {
    let ruleName = ruleBlock.ruleName().text;
    let generatedRuleClassName = ruleName.charAt(0).toUpperCase() + ruleName.slice(1) + 'Context';
    let ruleValue = ruleBlock.ruleValue();
    if (ruleValue.structValue()) {
      // We must declare a structure to hold the value, then write the code
      // that can generate such a structure from the ANTLR4 parser tree.
      let structValue = ruleValue.structValue()!;
      let structName = structValue.structName().text;
      let structFieldsDeclarationCode: string[] = [];
      let structFieldsInitialisationCode: string[] = [];
      for (let structField of structValue.structField()) {
        let fieldName = structField.structFieldName().text;
        let fieldValue = structField.structFieldValue();
        structFieldsDeclarationCode.push(`  public ${fieldName};`);
        if (fieldValue.structFieldValue_optional()) {
          let fieldRuleName = fieldValue.structFieldValue_optional()!.ruleName().text;
          structFieldsInitialisationCode.push(
`let ${fieldName}Context = context.${fieldRuleName}();
if (${fieldName}Context) {
  struct.${fieldName} = generate_${fieldRuleName}(${fieldName}Context);
}
`);
        } else if (fieldValue.structFieldValue_single()) {
          let fieldRuleName = fieldValue.structFieldValue_single()!.ruleName().text;
          structFieldsInitialisationCode.push(
`let ${fieldName}Context = context.${fieldRuleName}();
struct.${fieldName} = generate_${fieldRuleName}(${fieldName}Context);
`);
        } else {
          let fieldRuleName = fieldValue.structFieldValue_array()!.ruleName().text;
          structFieldsInitialisationCode.push(
`let ${fieldName}ContextList = context.${fieldRuleName}();
struct.${fieldName} = ${fieldName}ContextList.map(c => generate_${fieldRuleName}(c));
`);
        }
      }
      console.log(
`
class ${structName} {
${structFieldsDeclarationCode.join('\n')}
}

function generate_${ruleName}(context: parser.${generatedRuleClassName}): ${structName} {
let struct = new ${structName}();
${structFieldsInitialisationCode.join('\n')}
return struct;
}
`,
      );
    } else {
      // We don't need to declare a structure, as it will be a primary value.
      console.log(
`
function generate_${ruleName}(context: parser.${generatedRuleClassName}): string {
return context.text;
}
`,
      );
    }
  }
}

function runJavaCodeParser() {
  let inputStream = new ANTLRInputStream(`
  public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
  }
  `);
  let lexer = new Java8Lexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new Java8Parser(tokenStream);

  let result = parser.compilationUnit();
  // console.log(result);
}
