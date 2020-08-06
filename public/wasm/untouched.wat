(module
 (type $FUNCSIG$i (func (result i32)))
 (type $FUNCSIG$vi (func (param i32)))
 (type $FUNCSIG$iiiiiii (func (param i32 i32 i32 i32 i32 i32) (result i32)))
 (type $FUNCSIG$ii (func (param i32) (result i32)))
 (type $FUNCSIG$iii (func (param i32 i32) (result i32)))
 (type $FUNCSIG$viiii (func (param i32 i32 i32 i32)))
 (type $FUNCSIG$iiii (func (param i32 i32 i32) (result i32)))
 (type $FUNCSIG$v (func))
 (import "env" "memory" (memory $0 1))
 (data (i32.const 8) "\0b\00\00\00\01\00\00\00\00\00\00\00\0b\00\00\00\01\03\06\04\t\02\01\08\01\01\t")
 (data (i32.const 40) "\10\00\00\00\01\00\00\00\03\00\00\00\10\00\00\00\18\00\00\00\18\00\00\00\0b\00\00\00\0b\00\00\00")
 (data (i32.const 72) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e\00")
 (data (i32.const 128) "\1a\00\00\00\01\00\00\00\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s\00")
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (table $0 1 funcref)
 (elem (i32.const 0) $null)
 (global $assembly/index/str i32 (i32.const 56))
 (export "memory" (memory $0))
 (export "test" (func $assembly/index/test))
 (export "calculation" (func $assembly/index/calculation))
 (export "contrast" (func $assembly/index/contrast))
 (export "crypto2" (func $assembly/index/crypto2))
 (export "decode" (func $assembly/index/decode))
 (export "crypto" (func $assembly/index/crypto))
 (export "getmemory" (func $assembly/index/getmemory))
 (export "clearColor" (func $assembly/index/clearColor))
 (export "sortColors" (func $assembly/index/sortColors))
 (func $assembly/index/test (; 1 ;) (type $FUNCSIG$i) (result i32)
  i32.const 0
 )
 (func $assembly/index/calculation (; 2 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  block $break|0
   i32.const 0
   local.set $1
   loop $loop|0
    local.get $1
    local.get $0
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $0
    local.get $1
    i32.sub
    i32.store16
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $loop|0
   end
   unreachable
  end
 )
 (func $assembly/index/contrast (; 3 ;) (type $FUNCSIG$iiiiiii) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (result i32)
  (local $6 f64)
  (local $7 f64)
  local.get $0
  f64.convert_i32_s
  f64.const 0.299
  f64.mul
  local.get $1
  f64.convert_i32_s
  f64.const 0.578
  f64.mul
  f64.add
  local.get $2
  f64.convert_i32_s
  f64.const 0.114
  f64.mul
  f64.add
  local.set $6
  local.get $3
  f64.convert_i32_s
  f64.const 0.299
  f64.mul
  local.get $4
  f64.convert_i32_s
  f64.const 0.578
  f64.mul
  f64.add
  local.get $5
  f64.convert_i32_s
  f64.const 0.114
  f64.mul
  f64.add
  local.set $7
  local.get $6
  local.get $7
  f64.le
  if
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/array/Array<u8>#get:length (; 4 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<u8>#__unchecked_get (; 5 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 0
  i32.shl
  i32.add
  i32.load8_u
 )
 (func $~lib/array/Array<u8>#__get (; 6 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 88
   i32.const 144
   i32.const 93
   i32.const 41
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/array/Array<u8>#__unchecked_get
  local.set $2
  local.get $2
 )
 (func $assembly/index/crypto2 (; 7 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  block $break|0
   i32.const 0
   local.set $1
   loop $loop|0
    local.get $1
    local.get $0
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $1
    i32.load8_u
    global.get $assembly/index/str
    local.get $1
    global.get $assembly/index/str
    call $~lib/array/Array<u8>#get:length
    i32.rem_s
    call $~lib/array/Array<u8>#__get
    i32.sub
    i32.store8
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $loop|0
   end
   unreachable
  end
  global.get $assembly/index/str
  i32.const 3
  call $~lib/array/Array<u8>#__get
 )
 (func $assembly/index/decode (; 8 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  block $break|0
   i32.const 0
   local.set $1
   loop $loop|0
    local.get $1
    local.get $0
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $1
    i32.load8_u
    global.get $assembly/index/str
    local.get $1
    global.get $assembly/index/str
    call $~lib/array/Array<u8>#get:length
    i32.rem_s
    call $~lib/array/Array<u8>#__get
    i32.add
    i32.store8
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $loop|0
   end
   unreachable
  end
  global.get $assembly/index/str
  i32.const 1
  call $~lib/array/Array<u8>#__get
 )
 (func $assembly/index/crypto (; 9 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  block $break|0
   i32.const 0
   local.set $1
   loop $loop|0
    local.get $1
    i32.const 56
    call $~lib/array/Array<u8>#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    global.get $assembly/index/str
    local.get $1
    call $~lib/array/Array<u8>#__get
    i32.store16
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $loop|0
   end
   unreachable
  end
 )
 (func $assembly/index/getmemory (; 10 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load8_u
 )
 (func $assembly/index/clearColor (; 11 ;) (type $FUNCSIG$viiii) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  block $break|0
   i32.const 0
   local.set $4
   loop $loop|0
    local.get $4
    local.get $0
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $4
    i32.load
    local.set $5
    local.get $4
    i32.const 1
    i32.add
    i32.load
    local.set $6
    local.get $4
    i32.const 2
    i32.add
    i32.load
    local.set $7
    local.get $4
    i32.const 3
    i32.add
    i32.load
    local.set $8
    local.get $5
    local.get $6
    local.get $7
    local.get $1
    i32.const 24
    i32.shl
    i32.const 24
    i32.shr_s
    local.get $2
    i32.const 24
    i32.shl
    i32.const 24
    i32.shr_s
    local.get $3
    i32.const 24
    i32.shl
    i32.const 24
    i32.shr_s
    call $assembly/index/contrast
    if
     local.get $4
     i32.const 255
     i32.store
     local.get $4
     i32.const 1
     i32.add
     i32.const 2
     i32.store
     local.get $4
     i32.const 2
     i32.add
     i32.const 255
     i32.store
     local.get $4
     i32.const 3
     i32.add
     i32.const 222
     i32.store
    else
     local.get $4
     local.get $5
     i32.store
     local.get $4
     i32.const 1
     i32.add
     local.get $6
     i32.store
     local.get $4
     i32.const 2
     i32.add
     local.get $7
     i32.store
     local.get $4
     i32.const 3
     i32.add
     local.get $8
     i32.store
    end
    local.get $4
    i32.const 4
    i32.add
    local.set $4
    br $loop|0
   end
   unreachable
  end
 )
 (func $assembly/index/sortColors (; 12 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  local.get $0
  i32.const 4
  i32.div_s
  local.set $3
  local.get $1
  local.get $2
  i32.gt_s
  if (result i32)
   local.get $1
   local.get $2
   i32.sub
  else
   i32.const 0
  end
  local.set $4
  local.get $1
  local.get $2
  i32.add
  local.set $5
  block $break|0
   i32.const 0
   local.set $6
   loop $loop|0
    local.get $6
    local.get $3
    i32.const 1
    i32.sub
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $6
    local.get $5
    i32.gt_s
    if
     br $break|0
    end
    local.get $6
    local.set $7
    local.get $6
    i32.const 4
    i32.mul
    i32.load8_u
    local.get $6
    i32.const 4
    i32.mul
    i32.const 1
    i32.add
    i32.load8_u
    local.get $6
    i32.const 4
    i32.mul
    i32.const 2
    i32.add
    i32.load8_u
    local.get $6
    i32.const 4
    i32.mul
    i32.const 4
    i32.add
    i32.load8_u
    local.get $6
    i32.const 4
    i32.mul
    i32.const 5
    i32.add
    i32.load8_u
    local.get $6
    i32.const 4
    i32.mul
    i32.const 6
    i32.add
    i32.load8_u
    call $assembly/index/contrast
    if
     local.get $6
     i32.const 4
     i32.mul
     i32.const 4
     i32.add
     i32.load8_u
     local.set $8
     local.get $6
     i32.const 4
     i32.mul
     i32.const 5
     i32.add
     i32.load8_u
     local.set $9
     local.get $6
     i32.const 4
     i32.mul
     i32.const 6
     i32.add
     i32.load8_u
     local.set $10
     local.get $6
     i32.const 4
     i32.mul
     i32.const 7
     i32.add
     i32.load8_u
     local.set $11
     local.get $7
     i32.const 4
     i32.mul
     i32.const 4
     i32.add
     local.get $6
     i32.const 4
     i32.mul
     i32.load8_u
     i32.store8
     local.get $7
     i32.const 4
     i32.mul
     i32.const 5
     i32.add
     local.get $6
     i32.const 4
     i32.mul
     i32.const 1
     i32.add
     i32.load8_u
     i32.store8
     local.get $7
     i32.const 4
     i32.mul
     i32.const 6
     i32.add
     local.get $6
     i32.const 4
     i32.mul
     i32.const 2
     i32.add
     i32.load8_u
     i32.store8
     local.get $7
     i32.const 4
     i32.mul
     i32.const 7
     i32.add
     local.get $6
     i32.const 4
     i32.mul
     i32.const 3
     i32.add
     i32.load8_u
     i32.store8
     local.get $7
     i32.const 4
     i32.mul
     i32.const 0
     i32.add
     local.get $8
     i32.store8
     local.get $7
     i32.const 4
     i32.mul
     i32.const 1
     i32.add
     local.get $9
     i32.store8
     local.get $7
     i32.const 4
     i32.mul
     i32.const 2
     i32.add
     local.get $10
     i32.store8
     local.get $7
     i32.const 4
     i32.mul
     i32.const 3
     i32.add
     local.get $11
     i32.store8
    end
    local.get $6
    i32.const 1
    i32.add
    local.set $6
    br $loop|0
   end
   unreachable
  end
  i32.const 0
 )
 (func $null (; 13 ;) (type $FUNCSIG$v)
 )
)
