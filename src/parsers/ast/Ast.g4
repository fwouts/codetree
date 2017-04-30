grammar Ast;

ruleBlocks
	: ruleBlock*
	;

ruleBlock
	: ruleName ':' LINEBREAK ruleValue LINEBREAK (LINEBREAK | EOF)
	;

ruleName
	: Identifier
	;

ruleValue
	: structValue
	| textValue
	;

structValue
	: TAB structName '(' LINEBREAK structField* TAB ')'
	;

structField
	: TAB TAB structFieldName ': ' structFieldValue LINEBREAK
	;

structName
	: Identifier
	;

structFieldName
	: Identifier
	;

structFieldValue
	: structFieldValue_optional
	| structFieldValue_single
	| structFieldValue_array
	;

structFieldValue_single
	: ruleName
	;

structFieldValue_optional
	: '?' ruleName
	;

structFieldValue_array
	: '[' ruleName ']'
	;

textValue
	: TAB '$text'
	;

Identifier
	: [a-zA-Z][a-zA-Z0-9_]*
	;

TAB
	: [\t]
	;

LINEBREAK
	: [\n]
	;
