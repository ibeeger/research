(module
 (type $FUNCSIG$i (func (result i32)))
 (type $FUNCSIG$iiiiiii (func (param i32 i32 i32 i32 i32 i32) (result i32)))
 (type $FUNCSIG$iiii (func (param i32 i32 i32) (result i32)))
 (type $FUNCSIG$v (func))
 (import "env" "memory" (memory $0 0))
 (table $0 1 funcref)
 (elem (i32.const 0) $null)
 (global $assembly/index/num (mut i32) (i32.const 0))
 (export "memory" (memory $0))
 (export "test" (func $assembly/index/test))
 (export "contrast" (func $assembly/index/contrast))
 (export "sortColors" (func $assembly/index/sortColors))
 (func $assembly/index/test (; 0 ;) (type $FUNCSIG$i) (result i32)
  i32.const 0
 )
 (func $assembly/index/contrast (; 1 ;) (type $FUNCSIG$iiiiiii) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (result i32)
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
 (func $assembly/index/sortColors (; 2 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
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
 (func $null (; 3 ;) (type $FUNCSIG$v)
 )
)
